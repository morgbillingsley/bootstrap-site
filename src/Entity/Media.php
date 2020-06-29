<?php

namespace App\Entity;

use App\Repository\MediaRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Service\FileUploader;

/**
 * @ORM\Entity(repositoryClass=MediaRepository::class)
 */
class Media
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type;

    /**
     * @ORM\Column(type="text")
     */
    private $path;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function getUrl(): ?string
    {
        $srcDir = dirname(__DIR__);
        $projectDir = dirname($srcDir);
        $publicDir = $projectDir . '/public';
        return str_replace($publicDir, '', $this->path);
    }

    public function setFromFileName(string $fileName): self
    {
        $mimeType = mime_content_type($fileName);
        $this->setPath($fileName);
        $this->setType($mimeType);

        return $this;
    }
}
