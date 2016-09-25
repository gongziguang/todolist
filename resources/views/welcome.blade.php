<!DOCTYPE html>
<html>
    <head>
        <title>TodoList</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="http://cdn.bootcss.com/font-awesome/4.6.1/css/font-awesome.min.css" rel="stylesheet">
        <link rel="stylesheet" href="{{ url('css/app.css') }}">
    </head>
    <body>
        <div class="container" id="vue-app">
          <todo-header></todo-header>
          <div class="row">
            <div class="col-sm-12">
              <h1>welcome to vuejs</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-7">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h1 class="panel-title">My Todo list</h1>
                </div>
                <div class="panel-body">
                  <todo-item></todo-item>
                  <todo-add-form></todo-add-form>
                </div>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h1 class="panel-title">Information</h1>
                </div>
                <div class="panel-body">
                  <p>this is a sidebar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script type="text/javascript" src="{{url('js/main.js') }}"></script>
    </body>
</html>
