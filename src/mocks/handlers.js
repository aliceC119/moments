import { rest } from "msw";

const baseURL = "https://drf-api-alice-c6521fcf7abe.herokuapp.com/"
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
            pk: 4,
            username: "Oscar",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 4,
            profile_image: "https://res.cloudinary.com/dydlslgyc/image/upload/v1/media/images/european-shorthair-8601492_1280_pdxh60"
            }))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
    ];