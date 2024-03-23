// src/groupData.js 또는 적절한 JavaScript 파일
const connection = require('./database'); // 데이터베이스 연결 설정을 불러옵니다.

const groupData = () => {
  const query = `
    SELECT 
      country_of_residence, 
      country_to_visit,
      CASE 
        WHEN age BETWEEN 20 AND 30 THEN '20-30'
        WHEN age BETWEEN 31 AND 40 THEN '31-40'
        WHEN age BETWEEN 41 AND 50 THEN '41-50'
        WHEN age BETWEEN 51 AND 60 THEN '51-60'
        ELSE 'Other' 
      END AS age_group,
      gender,
      travel_preference,
      COUNT(*) AS count
    FROM Users
    WHERE age BETWEEN 20 AND 60
    GROUP BY country_of_residence, country_to_visit, age_group, gender, travel_preference
    ORDER BY country_of_residence, country_to_visit, age_group, gender, travel_preference;
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching grouped data:', err);
      return;
    }
    console.log('Grouped data:', results);
  });
};

groupData();
