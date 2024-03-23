// src/seed.js
const faker = require('faker');
const connection = require('./database');

const insertData = () => {
  const countries = ['한국', '중국', '일본', '미국', '스페인', '프랑스', '이탈리아', '베트남', '타이완', '인도'];
  const travelPreferences = ['City', 'Nature', 'Both'];

  for (let i = 0; i < 1000; i++) {
    const userData = {
      username: faker.name.findName().substring(0, 50),
      age: faker.datatype.number({ min: 10, max: 60 }),
      gender: faker.random.arrayElement(['Male', 'Female']),
      country_of_residence: faker.random.arrayElement(countries),
      country_to_visit: faker.random.arrayElement(countries),
      travel_preference: faker.random.arrayElement(travelPreferences),
      user_id: faker.internet.userName().substring(0, 30),
      password: faker.internet.password().substring(0, 255),
      email: faker.internet.email().substring(0, 100),
      phone_number: faker.phone.phoneNumber().replace(/[^\d]/g, "").substring(0, 20),
      travel_type: faker.random.arrayElement(['Walking', 'Car', 'Public Transport']).substring(0, 50),
      activities: faker.lorem.sentence().substring(0, 255),
      travel_budget: faker.random.arrayElement(['Low', 'Medium', 'High']).substring(0, 20),
      available_dates: faker.date.future().toISOString().substring(0, 50),
      start_date: faker.date.soon().toISOString().split('T')[0],
      duration_days: faker.datatype.number({ min: 1, max: 14 }),
      accommodation_preferences: faker.random.arrayElement(['Hotel', 'Hostel', 'Airbnb']).substring(0, 100),
      dietary_preferences: faker.random.arrayElement(['Vegetarian', 'Vegan', 'Gluten Free', 'No Restrictions']).substring(0, 100),
      transportation_preferences: faker.random.arrayElement(['Car', 'Public Transport', 'Bike']).substring(0, 100),
      social_media_profiles: faker.internet.userName().substring(0, 255),
      introduction: faker.lorem.paragraph().substring(0, 255),
      communication_preferences: faker.random.arrayElement(['Email', 'Phone', 'Text']).substring(0, 50),
      emergency_contact_name: faker.name.findName().substring(0, 50),
      emergency_contact_phone: faker.phone.phoneNumber().replace(/[^\d]/g, "").substring(0, 20),
      health_status: faker.random.arrayElement(['No health issues', 'Allergies']).substring(0, 255),
      previous_travels: faker.datatype.number({ min: 0, max: 50 }),
      occupation: faker.name.jobTitle().substring(0, 100)
    };

    connection.query('INSERT INTO Users SET ?', userData, (err) => {
      if (err) {
        console.error('Error inserting data:', err);
        return;
      }
    });
  }
  console.log('Data insertion complete.');
};

insertData();
