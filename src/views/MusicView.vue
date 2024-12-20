<script setup></script>

<template>
  <div class="music text-node-ignore">
    <div class="spotify">
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/artist/4DRJj8k5gwgZ94iokTULXx?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
    <div class="music secondary">
      <div class="bandcamp">
        <iframe
          style="border: 0; width: 100%; height: 120px"
          src="https://bandcamp.com/EmbeddedPlayer/album=572036397/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
          seamless
          class="text-node-ignore"
        ></iframe>
      </div>
      <div class="soundcloud">
        <iframe
          width="100%"
          height="200"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1010330911&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div
          style="
            font-size: 10px;
            color: #cccccc;
            line-break: anywhere;
            word-break: normal;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-family:
              Interstate,
              Lucida Grande,
              Lucida Sans Unicode,
              Lucida Sans,
              Garuda,
              Verdana,
              Tahoma,
              sans-serif;
            font-weight: 100;
          "
        >
          <a
            href="https://soundcloud.com/maxestwell"
            title="maxiswell"
            target="_blank"
            style="color: #cccccc; text-decoration: none"
            >maxiswell</a
          >
          ·
          <a
            href="https://soundcloud.com/maxestwell/see-sea"
            title="two see sea"
            target="_blank"
            style="color: #cccccc; text-decoration: none"
            >two see sea</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spotify,
.bandcamp,
.soundcloud {
  line-height: 0;
}

.music {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.secondary {
  flex-direction: row;
}

.bandcamp,
.soundcloud {
  width: 100%;
}
</style>
