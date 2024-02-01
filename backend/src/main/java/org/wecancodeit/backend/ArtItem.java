package org.wecancodeit.backend;

public class ArtItem {
    private Long id;
    private String artist;
    private String year;
    private String url;
    private String classification;
    private String title;

    public ArtItem(Long id, String artist, String year, String url, String classification, String title) {
        this.id = id;
        this.artist = artist;
        this.year = year;
        this.url = url;
        this.classification = classification;
        this.title = title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getClassification() {
        return classification;
    }

    public void setClassification(String classification) {
        this.classification = classification;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
