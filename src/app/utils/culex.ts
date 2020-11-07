/*
	XMLHttpRequest "readyState"
			0: unset
			1: open() is called
			2: send() is called -> headers + status available
			3: downloading... -> responseText holds partial data
			4: downloading complete -> now we can maipulate data

	SOLID:
	-	Single Responsability

	NOTE:
	-	Culex only fetches JSON data / .responseText
		-> .responseXML not implemented

	-	Credentials for authenticated endpoints not implemented
		-> options { user:null, pass:null }
*/

declare const ActiveXObject: any;

export interface CulexOptions {
  method: string;
  url: string;
  contentType?: string;
  user?: string | null;
  pass?: string | null;
}

export class Culex {
  private XHR: XMLHttpRequest;
  //
  constructor() {
    window.XMLHttpRequest
      ? (this.XHR = new XMLHttpRequest())
      : (this.XHR = new ActiveXObject('Microsoft.XMLHTTP'));
  }

  // methods ~async
  request(options: CulexOptions): Culex {
    const { method, url } = options;
    let { contentType, user, pass } = options;

    if (!contentType) {
      contentType = 'application/x-www-form-urlencoded';
    }
    if (!user) {
      user = null;
    }
    if (!pass) {
      pass = null;
    }

    this.XHR.open(method, url, true, user, pass); // async:true
    // console.log("request open");

    // this.XHR.onprogress = function () {
    // 	console.log("downloading from API...");
    // };

    // this.XHR.setRequestHeader("Content-Type", contentType);;

    this.XHR.send(null); // x:null if GET / x:object if POST

    // this.XHR.onload = function () {
    // 	console.log("download completed");
    // };

    return this;
  }

  // methods ~await
  response(callback: (data: object) => void): void {
    this.XHR.onreadystatechange = () => {
      // HEADERS_RECEIVED
      if (this.XHR.readyState === 2 && this.XHR.status === 200) {
        console.log(this.XHR.getResponseHeader('Content-Type'));
      }
      // ERROR handling
      if (this.XHR.readyState === 4 && this.XHR.status === 200) {
        try {
          callback(JSON.parse(this.XHR.responseText));
        } catch {
          console.warn('options invalid or unexistent');
        }
      }
    };
  }

  // methods
  abort(): void {
    this.XHR.abort();
    console.warn('connection aborted');
  }
}
