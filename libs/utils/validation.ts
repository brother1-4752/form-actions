import { z } from "zod";

// zod 폼 스키마 생성
export const formSchema = z.object({
  email: z
    .string()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "이메일 형식이 아닙니다."),
  username: z.string().min(3, "3자 이상 입력해주세요."),
  password: z
    .string()
    .min(5, "5자 이상 입력해주세요.")
    .regex(/^12345$/g, "잘못된 비밀번호입니다."),
});
