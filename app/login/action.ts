"use server";

import { FormEvent } from "react";
import { z } from "zod";

// zod 폼 스키마 생성
const formSchema = z.object({
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "이메일 형식이 아닙니다."),
  username: z.string().min(3, "3자 이상 입력해주세요."),
  password: z
    .string()
    .min(5, "5자 이상 입력해주세요.")
    .regex(/^12345$/g, "잘못된 비밀번호입니다."),
});

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
