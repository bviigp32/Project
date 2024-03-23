// public/script.js
document.getElementById('travelPreferencesForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const preferences = {
    gender: document.getElementById('gender').value,
    travelPreference: document.getElementById('travelPreference').value,
    countryToVisit: document.getElementById('countryToVisit').value,
    travelBudget: document.getElementById('travelBudget').value,
    accommodationPreferences: document.getElementById('accommodationPreferences').value
  };

  fetch('/findMatches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preferences)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Matching travelers:', data);
      // 웹사이트에 결과를 보여주기 위한 코드를 여기에 추가할 수 있습니다.
      // 예: 결과를 HTML 요소에 동적으로 추가하는 로직
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
