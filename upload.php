<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: index.html");
    exit;
}

$uploadDir = 'uploads/';
$maxFileSize = 10 * 1024 * 1024; // 10MB

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['pdf'])) {
    $file = $_FILES['pdf'];
    $fileName = basename($file['name']);
    $filePath = $uploadDir . $fileName;

    // Validate file
    if ($file['error'] !== UPLOAD_ERR_OK) {
        die("Upload error: " . $file['error']);
    }

    if ($file['size'] > $maxFileSize) {
        die("File too large. Max 10MB.");
    }

    if (strtolower(pathinfo($fileName, PATHINFO_EXTENSION)) !== 'pdf') {
        die("Only PDF files are allowed.");
    }

    // Move uploaded file
    if (move_uploaded_file($file['tmp_name'], $filePath)) {
        header("Location: files.php?success=1");
        exit;
    } else {
        die("Failed to upload file.");
    }
} else {
    die("Invalid request.");
}
