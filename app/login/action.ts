"use server";

import { formSchema } from "@/libs/utils/validation";

export async function handleSubmit(prevState: any, formData: FormData) {
  // 폼데이터 객체 변수화
  const data = {
    email: formData.get("email") as string,
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  };

  // zod를 사용한 폼데이터 검증 방식
  const result = formSchema.safeParse(data);

  // 로그인 검증 시간을 고려한 비동기 처리
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  // zod를 사용한 폼데이터 검증 결과 반환
  if (!result.success) {
    console.log(JSON.stringify(result.error.flatten()));
    return { errors: result.error.flatten().fieldErrors };
  } else {
    return { errors: {} };
  }

  // 일반적인 폼데이터 검증 방식
  // const password = formData.get("password") as string;
  // const passwordRegex = /^12345$/;

  // 일반적인 폼데이터 검증 결과 반환
  // if (!passwordRegex.test(password)) {
  //   return { errors: ["wrong password"] };
  // } else {
  //   return { errors: [] };
  // }
}
