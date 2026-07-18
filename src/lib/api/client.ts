export interface ApiResponse<T> {
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  meta?: Record<string, unknown>;
}

export class ApiError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
    this.name = "ApiError";
  }
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
  getToken?: () => Promise<string | null>,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "/api/v1";
  const url = `${baseUrl}${path}`;

  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  if (getToken) {
    const token = await getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  const envelope: ApiResponse<T> = await response.json().catch(() => ({
    error: {
      code: "PARSE_ERROR",
      message: "Failed to parse API response",
    },
  }));

  if (envelope.error) {
    throw new ApiError(envelope.error.code, envelope.error.message);
  }

  if (!response.ok) {
    throw new ApiError("HTTP_ERROR", `HTTP error! status: ${response.status}`);
  }

  if (envelope.data === undefined) {
    throw new ApiError("NO_DATA", "API response empty");
  }

  return envelope.data;
}
