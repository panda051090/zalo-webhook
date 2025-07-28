require('dotenv').config();
const axios = require('axios');

async function getAccessToken() {
  try {
    const response = await axios.post("https://oauth.zaloapp.com/v4/oa/access_token", {
      app_id: process.env.APP_ID,
      app_secret: process.env.APP_SECRET,
      grant_type: "client_credentials",
    });

    // 📌 Thêm dòng này để in toàn bộ dữ liệu phản hồi từ API
    console.log("📦 Full Response:", response.data);

    // Sau đó vẫn lấy token như cũ
    const { access_token, expires_in } = response.data;

    console.log('✅ Access Token:', access_token);
    console.log('⏳ Expires In:', expires_in, 'seconds');
  } catch (error) {
    console.error('❌ Error getting access token:', error.response?.data || error.message);
  }
}

getAccessToken();