import { title } from "@/settings";

/**
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${title || "BYUI-2.2"}-${pageTitle}`;
  }
  return `${title || "BYUI-2.2"}`;
}
