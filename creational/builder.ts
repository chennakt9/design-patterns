class HttpRequest {
  method: string;
  url: string;
  headers: Record<string, string>;
  queryParams: Record<string, string>;
  body: any;

  constructor(builder: HttpRequestBuilder) {
    this.method = builder.method;
    this.url = builder.url;
    this.headers = builder.headers;
    this.queryParams = builder.queryParams;
    this.body = builder.body;
  }
}

class HttpRequestBuilder {
  method: string = 'GET';
  url: string = '';
  headers: Record<string, string> = {};
  queryParams: Record<string, string> = {};
  body: any = null;

  setMethod(method: string): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  addHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }

  addQueryParam(key: string, value: string): this {
    this.queryParams[key] = value;
    return this;
  }

  setBody(body: any): this {
    this.body = body;
    return this;
  }

  build(): HttpRequest {
    // Could do validations here if needed
    return new HttpRequest(this);
  }
}

const request = new HttpRequestBuilder()
  .setMethod('POST')
  .setUrl('https://api.chenna.dev/notifications')
  .addHeader('Authorization', 'Bearer my-jwt')
  .addQueryParam('type', 'email')
  .setBody({ subject: 'Builder pattern is fire', content: '🔥🔥🔥' })
  .build();

console.log(request);
