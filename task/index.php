<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

    <?php
    $curl = curl_init();
    curl_setopt_array($curl, [
        CURLOPT_URL => "https://api.baubuddy.de/index.php/login",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "POST",
        CURLOPT_POSTFIELDS => "{\"username\":\"365\", \"password\":\"1\"}",
        CURLOPT_HTTPHEADER => [
            "Authorization: Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz",
            "Content-Type: application/json"
        ],
    ]);
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        $access_token = json_decode($response)->oauth->access_token;
    }

    $url = "https://api.baubuddy.de/dev/index.php/v1/tasks/select";
    $ch = curl_init();
    $headers = [
        "Authorization: Bearer {$access_token}",
        "Content-Type: application/json"
    ];
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $response = curl_exec($ch);
    $data = json_decode($response, true);
    curl_close($ch);
    ?>
    <table>
        <!-- <form class="example"  action="action_page.php">
            <input type="text" placeholder="Search.." name="search">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form> -->
        <!-- <input type="text" id="search-input" placeholder="Search..."> -->
        <form method="get">
            <input type="text" name="search" placeholder="Search...">
            <button type="submit">Search</button>
        </form>
        <?php
        // Get the search term from the query string
        $searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

        // Filter the data based on the search term
        if (!empty($searchTerm)) {
            $filteredData = array_filter($data, function ($task) use ($searchTerm) {
                return strpos(strtolower($task['title']), strtolower($searchTerm)) !== false;
            });
        } else {
            $filteredData = $data;
        }
        ?>

        <!-- Display the filtered data -->
        <?php
// Get the search term from the query string
$searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

// Filter the data based on the search term
if (!empty($searchTerm)) {
    $filteredData = array_filter($data, function ($task) use ($searchTerm) {
        return strpos(strtolower($task['title']), strtolower($searchTerm)) !== false;
    });
} else {
    $filteredData = $data;
}
?>

<!-- Display the filtered data -->
<table>
    <thead>
        <tr>
            <th>Task</th>
            <th>Title</th>
            <th>Description</th>
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($filteredData as $task) { ?>
            <tr>
                <td><?php echo $task['task']; ?></td>
                <td><?php echo $task['title']; ?></td>
                <td><?php echo $task['description']; ?></td>
                <td>
                    <div style="background-color: <?php echo $task['colorCode']; ?>; width: 20px; height: 20px;"></div>
                </td>
            </tr>
        <?php } ?>
    </tbody>
</table>

                    <hr>
        <thead>
            <tr>
                <th>Task</th>
                <th>Title</th>
                <th>Description</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($data as $task) { ?>
                <tr>
                    <td><?php echo $task['task']; ?></td>
                    <td><?php echo $task['title']; ?></td>
                    <td><?php echo $task['description']; ?></td>
                    <td>
                        <div style="background-color: <?php echo $task['colorCode']; ?>; width: 20px; height: 20px;"></div>
                    </td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
    <!-- <script src="./script2.js"></script> -->

</body>

</html>