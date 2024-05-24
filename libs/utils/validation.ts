import { z } from "zod";

// zod 폼 스키마 생성
export const formSchema = z.object({
  email: z
    .string()
    .regex(
      /^[\w-\.]+@zod.com$/g,
      "@zod.com 으로 끝나는 이메일을 입력해주세요."
    ),
  username: z.string().min(5, "5자 이상 입력해주세요."),
  password: z
    .string()
    .min(10, "10자 이상 입력해주세요.")
    .regex(/\d/g, "비밀번호에 최소 1개 이상의 숫자가 포함되어야 합니다."),
});
