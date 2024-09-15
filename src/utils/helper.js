import axios from "axios";

// Helper function to fetch blob from API
export const fetchBlobFromWalrus = async (blobId) => {
  try {
    const url = `https://aggregator-devnet.walrus.space/v1/${blobId}`;

    // Gọi API sử dụng Axios và lấy về Blob
    const response = await axios.get(url, {
      responseType: 'blob',  // Đảm bảo trả về dạng blob
      headers: {
        'Content-Type': 'application/octet-stream'
      }
    });

    // Tạo URL từ Blob để hiển thị ảnh
    // const imageUrl = URL.createObjectURL(response.data);

    // trả về dạng blob
    return response.data;

  } catch (error) {
    console.error('Error fetching blob:', error);
  }
};

// Helper function để fetch nhiều Blob từ API
export const fetchBlobsFromWalrus = async (blobIds) => {
  try {
    const requests = blobIds.map(blobId => {
      const url = `https://aggregator-devnet.walrus.space/v1/${blobId}`;
      return axios.get(url, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'application/octet-stream'
        }
      });
    });

    // Gọi tất cả các request song song
    const responses = await axios.all(requests);

    // Tạo danh sách các imageUrl từ các Blob trả về
    const blobDataArr = responses.map(response => response.data);
    return blobDataArr;
  } catch (error) {
    console.error('Error fetching blobs:', error);
  }
};