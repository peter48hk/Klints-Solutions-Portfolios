<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PDF Files | Klints Solutions</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
</head>
<body class="bg-gray-50 min-h-screen">

  <!-- Navigation -->
  <nav class="bg-blue-700 text-white p-4 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Klints Solutions</h1>
      <div class="space-x-4">
        <a href="dashboard.html" class="hover:underline">Dashboard</a>
        <a href="logout.php" class="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Logout</a>
      </div>
    </div>
  </nav>

  <div class="max-w-4xl mx-auto p-6 mt-8 bg-white rounded-xl shadow-lg">
    <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">PDF File Manager</h2>

    <!-- Upload Form -->
    <form action="upload.php" method="POST" enctype="multipart/form-data" class="mb-10">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <input type="file" name="pdf" accept=".pdf" required class="w-full md:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-lg"/>
        <button type="submit" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          <i class="fas fa-upload mr-2"></i> Upload PDF
        </button>
      </div>
      <p class="text-sm text-gray-500 mt-2">Only PDF files (max 10MB)</p>
    </form>

    <!-- Uploaded Files List -->
    <h3 class="text-2xl font-semibold mb-4">Your Uploaded PDFs</h3>
    <?php
    session_start();
    if (!isset($_SESSION['user_id'])) {
      header("Location: index.html");
      exit;
    }

    $uploadDir = 'uploads/';
    $files = glob($uploadDir . '*.pdf');

    if (empty($files)) {
      echo '<p class="text-gray-600">No PDFs uploaded yet.</p>';
    } else {
      echo '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
      foreach ($files as $file) {
        $fileName = basename($file);
        echo '
        <div class="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <i class="fas fa-file-pdf text-red-600 text-3xl"></i>
            <span class="font-medium">' . htmlspecialchars($fileName) . '</span>
          </div>
          <a href="' . $file . '" download class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            <i class="fas fa-download"></i> Download
          </a>
        </div>';
      }
      echo '</div>';
    }
    ?>
  </div>

</body>
</html>
