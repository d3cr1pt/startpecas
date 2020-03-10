<?php
    $data = [
        "0" => [
            "inner_id"  => "alfa",
            "name"      => "Alfa Romeo",
            "content"   => "Cars of Alfa Romeo"
        ],
        "1" => [
            "inner_id"  => "alfa",
            "name"      => "Alfa Romeo",
            "content"   => "Cars of Alfa Romeo"
        ]
    ];
    foreach($data as $key => $value) {
        $id =       $value['inner_id'];
        $name =     $value['name'];
        $content =  $value['content'];
        echo '<div class="tab-pane fade" id="v-pills-'.$id.'" role="tabpanel" aria-labelledby="v-pills-'.$id.'-tab">'.$content.'</div>';
    }