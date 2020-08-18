<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">

  <title>Sorting algorithm demonstration</title>
</head>

<body>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 class="my-0 mr-md-auto font-weight-normal">Sorting algorithm visualisations</h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <div class="dropdown">
        <button id="my-dropdown" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Algorithm</button>
        <div class="dropdown-menu" aria-labelledby="my-dropdown">
          <a class="dropdown-item" href="#">Bubble sort</a>
          <a class="dropdown-item" href="#">Merge sort</a>
          <a class="dropdown-item" href="#">Quick sort</a>
          <a class="dropdown-item" href="#">Heap sort</a>
        </div>

        <button id="my-dropdown2" class="btn btn-primary dropdown-toggle" 
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Speed</button>
        <div class="dropdown-menu" aria-labelledby="my-dropdown2">
          <form class="range-field">
            <input type="range" min="1" max="1000" />
          </form>

        </div>
        <button id="my-dropdown3" class="btn btn-primary dropdown-toggle" 
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Array size</button>
        <div class="dropdown-menu" aria-labelledby="my-dropdown3">
        <form class="range-field my-1 w-10">
            <input type="range" min="5" max="50" />
          </form>
        </div>
        <a class="btn btn-outline-primary" href="#">Generate new array</a>
        <a class="btn btn-outline-danger" href="#">Sort!</a>


      </div>

    </nav>
  </div>

  <div class="container-flex p-4">