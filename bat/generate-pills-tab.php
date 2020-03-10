<?php
    $data = [
        "0" => [
            "id"        => "alfa",
            "name"      => "Alfa Romeo",
            "content"   => "Cars of Alfa Romeo"
        ],
        "1" => [
            "id"        => "alfa",
            "name"      => "Alfa Romeo",
            "content"   => "Cars of Alfa Romeo"
        ]
    ];
    foreach($data as $key => $value) {
        $id = $value['id'];
        $name = $value['name'];
        echo '<a class="nav-link" id="v-pills-'.$id.'-tab" data-toggle="pill" href="#v-pills-'.$id.'" role="tab" aria-controls="v-pills-'.$id.'" aria-selected="false"><i class="fas fa-chevron-right" style="color: grey;"></i>&nbsp;'.$name.'</a>';
    }