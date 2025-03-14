import { z } from 'zod'

export const EmailSchema = z.object({
  email: z.string().email({ message: '이메일 형식이 올바르지 않습니다.' }),
})

export const IdSchema = z.object({
  id: z.string().regex(/^(?=.*[a-zA-Z])[a-zA-Z0-9]{5,16}$/, {
    message: '아이디는 영문자와 숫자로 이루어진 5~16자 이내로 입력해주세요.',
  }),
})

export const PasswordSchema = z.object({
  password: z
    .string()
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()_+={}:;'<>,.?~`-]{8,16}$/,
      {
        message:
          '비밀번호는 영문자, 숫자, 특수문자로 이루어진 8~16자 이내로 입력해주세요.',
      },
    ),
})

export const NicknameSchema = z.object({
  nickname: z.string().regex(/^(?=.*[가-힣a-zA-Z])[가-힣a-zA-Z0-9]{2,12}$/, {
    message:
      '닉네임은 한글, 영문자, 숫자로 이루어진 2~12자 이내로 입력해주세요.',
  }),
})

export type Id = z.infer<typeof IdSchema>
export type Email = z.infer<typeof EmailSchema>
export type Password = z.infer<typeof PasswordSchema>
export type Nickname = z.infer<typeof NicknameSchema>
