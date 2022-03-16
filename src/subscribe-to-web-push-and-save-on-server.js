const config = {
    pushKey:
      "-- YOUR PUBLIC VAPID KEY --",
    appSyncUrl:
      "-- YOUR APPSYNC URL",
    appSyncApiKey: "-- YOUR APPSYNC API KEY --",
  };
  async function subscribe(topic) {
    swReg = await navigator.serviceWorker.register("/sw.js");
    const subscription = await swReg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array(config.pushKey),
    });
  
    fetch(config.appSyncUrl, {
      method: "POST",
      headers: { "x-api-key": config.appSyncApiKey },
      body: JSON.stringify({ query: `mutation($topic: String, $subscription: String) {subscribe(topic: $topic, subscription: $subscription)}`, 
        variables: { topic, subscription: JSON.stringify(subscription) } })
    });
  }
  function urlB64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  subscribe("news");