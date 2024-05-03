/*
export class Signup {


  public static async register(
    values: RegistrationInputs,
    isEmailInvite?: boolean,
  ): Promise<string | "invalid_string"> {
    const result = await mittwaldApi.userRegister.request({
      requestBody: {
        password: values.password,
        email: values.email,
        person: {
          title: values.person.title,
          firstName: values.person.firstName,
          lastName: values.person.lastName,
        },
      },
    });

    if (
      result.status === 400 &&
      result.content.message?.includes("email must match format")
    ) {
      return "invalid_string";
    }

    assertStatus(result, 201);

    store.setProfileInformation(values);
    store.setUserId(result.content.userId);
    store.setIsEmailInvite(!!isEmailInvite);

    return result.content.userId;
  }

  public static async verifyRegistration(
    values: VerifyRegistrationInputs,
    email: string,
    password: string,
    rejectionAnimation: AnimationController,
    userId?: string,
    appRedirect?: CallableFunction,
  ): Promise<void | number> {
    if (!userId) {
      throw new Error("userId must be set");
    }

    const autoLogin = async (): Promise<void> => {
      const authenticationResult = await mittwaldApi.userAuthenticate.request({
        requestBody: {
          email,
          password,
        },
      });
      if (authenticationResult.status !== 200) {
        throw authenticationResult;
      }
      const { token } = authenticationResult.content;
      sessionStore.login(token);
      appRedirect && appRedirect();
    };

    const result = await mittwaldApi.userVerifyRegistration.request({
      requestBody: {
        email,
        token: values.token,
        userId,
      },
    });

    if (result.status === 400) {
      rejectionAnimation.start();
      throw new UnexpectedResponseError(result);
    }

    assertStatus(result, 200);

    
    await retryRunnable(autoLogin, {
      retries: 5,
      getRetryBackoff: constantRetryBackoff(2),
    });

    registerStore.clearProfileInformation();
    return;
  }

  public static async verifyMfa(
    values: VerifyMfaInputs,
    email: string,
    password: string,
    rejectionAnimation: AnimationController,
  ): Promise<void | false> {
    const result = await mittwaldApi.userAuthenticateMfa.request(
      {
        requestBody: {
          multiFactorCode: values.multiFactorCode,
          email,
          password,
        },
      },
      {
        timeout: 30 * 1000,
      },
    );

    if (result.status !== 200) {
      rejectionAnimation.start();
      throw new UnexpectedResponseError(result);
    }

    sessionStore.login(result.content.token);
    sessionStore.setMfaEnabled(true);
    loginStore.clearFirstFactorInformation();
  }

  public static confirmMfa = async (
    multiFactorCode: string,
    rejectionAnimation: AnimationController,
  ): Promise<string[]> => {
    const res = await mittwaldApi.userConfirmMfa.request(
      {
        requestBody: { multiFactorCode },
      },
      {
        timeout: 30 * 1000,
      },
    );

    if (res.status !== 200) {
      rejectionAnimation.start();
      throw new UnexpectedResponseError(res);
    }

    return res.content.recoveryCodesList;
  };

  public static removeMfa = async (
    multiFactorCode: string,
    rejectionAnimation: AnimationController,
  ): Promise<void> => {
    const res = await mittwaldApi.userDisableMfa.request(
      {
        requestBody: { multiFactorCode },
      },
      {
        timeout: 30 * 1000,
      },
    );

    if (res.status !== 204) {
      rejectionAnimation.start();
      throw new UnexpectedResponseError(res);
    }
  };

  public static resetRecoveryCodes = async (
    multiFactorCode: string,
    rejectionAnimation: AnimationController,
  ): Promise<string[]> => {
    const res = await mittwaldApi.userResetRecoverycodes.request({
      requestBody: { multiFactorCode: multiFactorCode },
    });

    if (res.status !== 200) {
      rejectionAnimation.start();
      throw new UnexpectedResponseError(res);
    }

    return res.content.recoveryCodesList;
  };

  public static verifyEmail = async (
    email: string,
    token: string,
    rejectionAnimation: AnimationController,
  ): Promise<void> => {
    const response = await mittwaldApi.userVerifyEmail.request({
      requestBody: {
        email,
        token,
      },
    });

    if (response.status !== 204) {
      rejectionAnimation.start();
      throw new UnexpectedResponseError(response);
    }
  };

  public static useUserEmailAddress(): string {
    return (
      mittwaldApi.userGetOwnAccount
        .getResource({ path: { userId: "self" } })
        .useWatchData().email ??
      mittwaldApi.userGetOwnEmail.getResource({}).useWatchData().email
    );
  }

  public static usePasswordUpdatedAt(): string {
    return mittwaldApi.userGetPasswordUpdatedAt.getResource({}).useWatchData()
      .passwordUpdatedAt;
  }

  public static useMfaConfirmed(): boolean {
    return mittwaldApi.userGetMfaStatus.getResource({}).useWatchData()
      .confirmed;
  }

  public static async updateEmailAddress(
    values: UpdateEmailAddressInputs,
  ): Promise<void> {
    const response = await mittwaldApi.userChangeEmail.request({
      requestBody: {
        email: values.email,
      },
    });

    assertStatus(response, 204);
  }

  public static async resendEmail(
    values: ResendEmailInputs,
    userId: string = "",
  ): Promise<void> {
    const response = await mittwaldApi.userResendVerificationEmail.request({
      requestBody: {
        userId,
        email: values.email,
      },
    });

    assertStatus(response, 204);
  }

  public static async changePassword(
    values: ChangePasswordInputs,
  ): Promise<string | 202> {
    const response = await mittwaldApi.userChangePassword.request(
      {
        requestBody: {
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
          multiFactorCode: values.multiFactorCode || undefined,
        },
      },
      {
        timeout: 30 * 1000,
      },
    );

    if (response.status === 202) {
      return 202;
    }

    assertStatus(response, 200);

    return response.content.token;
  }

  public static async resetPassword(
    values: ResetPasswordInputs,
  ): Promise<void> {
    const result = await mittwaldApi.userInitPasswordReset.request({
      requestBody: {
        email: values.email,
      },
    });

    assertStatus(result, 201);
  }

  public static async comfirmResetPassword(
    values: ConfirmPasswordResetInputs,
    userId: string,
    token: string,
  ): Promise<void> {
    const result = await mittwaldApi.userConfirmPasswordReset.request({
      requestBody: {
        userId,
        token,
        password: values.password,
      },
    });

    assertStatus(result, 204);
  }

  public static async logout(): Promise<void> {
    const result = await mittwaldApi.userLogout.request({});

    assertStatus(result, 204);

    sessionStore.logout();
  }

  public static useAccessTokenRetrievalKey(): AccessTokenRetrievalKey {
    return mittwaldApi.userCreateAccessTokenRetrievalKey
      .getResource({ path: { userId: "self" } })
      .useWatchData();
  }

  public static async delete(
    values: DeleteProfileInputs,
  ): Promise<409 | 400 | void> {
    const response = await mittwaldApi.userDeleteUser.request({
      requestBody: {
        password: values.password,
        multiFactorCode: values.multiFactorCode,
      },
    });

    if (response.status === 409 || response.status === 400) {
      return response.status;
    }

    assertStatus(response, 200);
  }
}
*/
