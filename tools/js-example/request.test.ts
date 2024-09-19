import { describe, it, expect } from "vitest";
import * as siwa from "@projectlibertylabs/siwa";

describe("SIWA request test", () => {
  it("should return a valid redirect URL from the real SIWA server", async () => {
    const providerKeyUri: string = "//Alice";
    const callbackUri: string = "http://localhost:3000/callback"; // Ensure the mock server is running
    const permissions: number[] = [5, 7, 8, 9, 10];
    const credentials = [siwa.VerifiedEmailAddressCredential];

    try {
      const signedRequest = await siwa.generateSignedRequest(providerKeyUri, callbackUri, permissions, credentials);
      const redirectUrl = await siwa.generateRedirectUrl(signedRequest, new URLSearchParams({ id: "11223344" }));
      expect(redirectUrl).toContain("callbackUrlParams=");
      expect(redirectUrl).toContain("signedRequest=");
    } catch (error) {
      throw new Error("Error in generating redirect URL: " + error);
    }
  });
});
