//API 문서 제목
export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API 설명서",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"], // swagger 폴더의 swagger.js로 끝나는 모든 파일은 API 문서로 사용
};
