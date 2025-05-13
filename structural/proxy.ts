interface Internet {
  connectTo(site: string): void;
}

class RealInternet implements Internet {
  connectTo(site: string): void {
    console.log(`Connecting to ${site}`);
  }
}

class ProxyInternet implements Internet {
  private blockedSites = ["bad-site.com"];
  constructor(private realInternet: RealInternet) {}

  connectTo(site: string): void {
    if (this.blockedSites.includes(site)) {
      console.log(`Access Denied to ${site}`);
    } else {
      this.realInternet.connectTo(site);
    }
  }
}
