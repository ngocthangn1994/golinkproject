const API_URL = "https://golink-backend-0vo1.onrender.com";
type Link = {
  _id: string;
  shortUrl: string;
  longUrl: string;
};
type getApiResponse = {
  success: boolean;
  message: string;
  data: Link[];
};
type ResolveLinkResponse = {
  success: boolean;
  longUrl: string;
};
export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status} `);
  }
  return response.json();
}
export const api = {
  createLink: (shortUrl: string, longUrl: string) => {
    return fetchApi<Link>("/links", {
      method: "POST",
      body: JSON.stringify({
        shortUrl,
        longUrl,
      }),
    });
  },
  getLinks: () => {
    return fetchApi<getApiResponse>("/links", { method: "GET" });
  },
  deleteLink: (id: string) => {
    return fetchApi(`/links/${id}`, { method: "DELETE" });
  },
  resolveLink: (keyword: string) => {
    return fetchApi<ResolveLinkResponse>(`/links/resolve/${keyword}`, {
      method: "GET",
    });
  },
};
