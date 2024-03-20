function confirmDeletion() {
    var tableName = document.getElementById('tableName').value;
    var dbName = document.getElementById('dbName').value;
    var cluster = document.getElementById('cluster').value;

    if (tableName) {
        var isConfirmed = confirm('Are you sure you want to delete the table: ' + tableName + ' in DB: ' + dbName + ', cluster: ' + cluster + '?');
        if (isConfirmed) {
            // Deletion logic
            alert('Deletion process started for table: ' + tableName + ' in DB: ' + dbName + ', cluster: ' + cluster);
            // Call a backend service to delete the table, passing the tableName, dbName, and cluster
        }
    } else {
        alert('Please enter a table name.');
    }
}
