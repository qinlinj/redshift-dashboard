function confirmDeletion() {
    var tableName = document.getElementById('tableName').value;
    if (tableName) {
        var isConfirmed = confirm('Are you sure you want to delete the table: ' + tableName + '?');
        if (isConfirmed) {
            // Deletion logic
            alert('Deletion process started for table: ' + tableName);
            // Call a backend service to delete the table
        }
    } else {
        alert('Please enter a table name.');
    }
}
