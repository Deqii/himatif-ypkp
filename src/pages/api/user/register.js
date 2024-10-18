import { signUp } from "@/lib/service";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Panggil signUp tanpa callback, langsung menunggu hasil
      const user = await signUp(req.body);

      if (user) {
        res
          .status(200)
          .json({ status: true, statusCode: 200, message: "success" });
      } else {
        res
          .status(400)
          .json({
            status: false,
            statusCode: 400,
            message: "User already exists",
          });
      }
    } catch (error) {
      // Tangani error, misalnya kesalahan server
      res
        .status(500)
        .json({
          status: false,
          statusCode: 500,
          message: "Internal Server Error",
          error: error.message,
        });
    }
  } else {
    res
      .status(405)
      .json({ status: false, statusCode: 405, message: "Method Not Allowed" });
  }
}
