import { api } from "./api/linkApi";

chrome.omnibox.onInputEntered.addListener(async (text) => {
  try {
    const keyword = text.trim();
    const data = await api.resolveLink(keyword);
    await chrome.tabs.update({
      url: data.longUrl,
    });
  } catch (error) {
    console.error("Golink error", error);
  }
});
