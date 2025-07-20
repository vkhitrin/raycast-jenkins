import { getPreferenceValues } from "@raycast/api";
import type { Config } from "../types/Config";

export function useConfig(): Config {
    const { url, username, password, unsafeHttps } = getPreferenceValues();
    return {
        url,
        username,
        password,
        unsafeHttps,
    };
}
