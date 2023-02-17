<?php
$bl = false;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <h1>Task List</h1>
        <div><img src="https://www.vero-digital.solutions/wp-content/uploads/2020/12/vero_digital_logo.png" style="width: 150px;" alt=""></div>
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
        <table class="table table-striped">
            <!-- <form class="example"  action="action_page.php">
            <input type="text" placeholder="Search.." name="search">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form> -->
            <!-- <input type="text" id="search-input" placeholder="Search..."> -->
            <form method="get">
                <input type="text" name="search" style="margin:10px 0px 20px 0px" placeholder="Search...">
                <button type="submit">Search</button>
            </form>
            <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#imageModal">
                Select Image
            </button> -->
            <!-- <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="imageModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="imageModalLabel">Select Image</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="imageInput">Choose an image file</label>
                                    <input type="file" class="form-control-file" id="imageInput">
                                </div>
                            </form>
                            <img id="selectedImage" src="#" alt="Selected Image" style="display: none;">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick="selectImage()">Select</button>
                        </div>
                    </div>
                </div>
            </div> -->
            <button type="button" class="btn btn-primary" style="margin-left:800px;" data-toggle="modal" data-target="#myModal">Select Image</button>
            <div id="myModal" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Select Image</h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form action="" method="post" enctype="multipart/form-data">
                                <input type="file" name="image" id="image">
                                <br><br>
                                <input type="submit" name="submit" value="Upload">
                            </form>
                            <br>
                            <div id="image-preview"></div>
                        </div>
                    </div>

                </div>
            </div>


            <?php
            // Get the search term from the query string
            $bl = true;
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
            ?>
                <style>
                    .aa {
                        display: none;
                    }
                </style><?php
                        $filteredData = $data;
                    }
                        ?>

            <!-- Display the filtered data -->
            <div>
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
            </div>
            <?php
            if ($bl == false) {

            ?>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody class="aa">
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
            <?php } ?>

        </table>
    </div>
    <!-- <script src="./script2.js"></script> -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script></script>

</body>

</html>