
export default class LogoLocator {

    constructor(document, logo) {
        this.document = document;
        this.logo = logo;
    }

    sizeToFit() {
        var logoImage = this.logo.layers[0];
        logoImage.frame.x = 0;
        logoImage.frame.y = 0;
        var initial_height = logoImage.frame.height;
        var initial_width = logoImage.frame.width;
        var frame_height = this.logo.frame.height;
        logoImage.frame.height = frame_height;
        var end_width = initial_width * frame_height/initial_height;
        this.logo.frame.width = end_width;
        logoImage.frame.width = end_width;
    }

    aspectRatio(width, height) {
        return width / height;
    }

    maxWidth() {
        return this.wrap.width - (this.padding * 2)
    }

    maxHeight() {
        return this.wrap.height - (this.padding * 2)
    }

    imageAspectRatio() {
        return this.aspectRatio(this.logo.frame.width, this.logo.frame.height);
    }

    maxAspectRatio() {
        return this.aspectRatio(this.maxWidth(),this.maxHeight())
    }

    displayHeight() {
        if (this.imageAspectRatio() < this.maxAspectRatio()) {
            return this.maxHeight()
        } else {
            return this.maxWidth() / this.imageAspectRatio()
        }
    }

    displayWidth() {
        if (this.imageAspectRatio() < this.maxAspectRatio()) {
            return this.maxHeight() * this.imageAspectRatio()
        } else {
            return this.maxWidth()
        }
    }

    displayLeft() {
        switch(this.alignHorizontal) {
            case 'left':
                return this.wrap.x + this.padding;
            case 'right':
                return this.wrap.x + this.padding + this.maxWidth() - this.displayWidth();
            case 'center':
                return this.wrap.x + this.padding + (this.maxWidth() - this.displayWidth()) / 2;
        }
    }

    displayTop() {
        switch(this.alignVertical) {
            case 'top':
                return this.wrap.y + this.padding;
            case 'bottom':
                return this.wrap.y + this.padding + this.maxHeight() - this.displayHeight();
            case 'middle':
                return this.wrap.y + this.padding + (this.maxHeight() - this.displayHeight()) / 2;
        }
    }

    rect() {
        return {
            x: this.displayLeft(),
            y: this.displayTop(),
            width: this.displayWidth(),
            height: this.displayHeight()
        }
    }

    findArtboardLogo(artboardName) {
        return this.logo.getAllInstances().filter(function (local) {
            return local.getParentArtboard().name === artboardName
        })[0]
    }

    setWrapper(wrapperName, artboardName) {
        var wrappers = this.document.getLayersNamed(wrapperName);
        this.wrap = wrappers.filter(function (wrapper) {
            return wrapper.getParentArtboard().name === artboardName } )[0].frame
    }

    centerAlign(artboardName, padding) {
        this.alignVertical = 'middle';
        this.alignHorizontal = 'center';
        this.padding = padding || 5;
        var localLogo = this.findArtboardLogo(artboardName);
        this.setWrapper('logo-wrapper', artboardName);
        localLogo.frame = this.rect();
    }

    leftAlign(artboardName, padding) {
        this.alignVertical = 'middle';
        this.alignHorizontal = 'left';
        this.padding = padding || 5;
        var localLogo = this.findArtboardLogo(artboardName);
        this.setWrapper('logo-wrapper',artboardName);
        localLogo.frame = this.rect();
        var office = this.getLayer('office', artboardName);
        var location = this.getLayer('location', artboardName);
        var agentTitle = this.getLayer('agent-title', artboardName);
        location.frame.x = this.displayLeft() + this.displayWidth() + this.padding;
        if (office) {
            office.frame.x = this.displayLeft() + this.displayWidth() + this.padding;
        }
        if (agentTitle) {
            agentTitle.frame.x = this.displayLeft() + this.displayWidth() + this.padding;
        }
    }

    getLayer(name, artboardName) {
        var layers = this.document.getLayersNamed(name);
        return layers.filter(function (layer) {
            return layer.getParentArtboard().name === artboardName } )[0];
    }

    rightAlign(artboardName, padding) {
        this.alignVertical = 'middle';
        this.alignHorizontal = 'right';
        this.padding = padding || 5;
        var localLogo = this.findArtboardLogo(artboardName);
        this.setWrapper('logo-wrapper',artboardName);
        localLogo.frame = this.rect();
    }
}
