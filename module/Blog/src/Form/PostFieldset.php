<?php

namespace Blog\Form;

use Laminas\Form\Fieldset;
// Tambah Ini Untuk laminas-hydrator
use Blog\Model\Post;
use Laminas\Hydrator\ReflectionHydrator;

class PostFieldset extends Fieldset
{
    public function init()
    {
        // perbarui init()metode untuk menambahkan dua baris berikut (laminas-hydrator):
        $this->setHydrator(new ReflectionHydrator());
        $this->setObject(new Post('', ''));

        $this->add([
            'type' => 'hidden',
            'name' => 'id',
        ]);

        $this->add([
            'type' => 'text',
            'name' => 'title',
            'options' => [
                'label' => 'Judul Post',
            ],
        ]);

        $this->add([
            'type' => 'textarea',
            'name' => 'text',
            'options' => [
                'label' => 'Post Text',
            ],
        ]);
    }
}
