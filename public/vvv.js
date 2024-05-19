const { insertData, checkUserIdExists } = require('./backend/databasepg');

// Call the insert function with sample data
insertData('new_user_id', 'new_user_password', (err, success) => {
    if (err) {
        console.error('Error:', err.message);
    } else if (success) {
        console.log('Data inserted successfully');
    } else {
        console.log('User ID already exists, data not inserted.');
    }
});
