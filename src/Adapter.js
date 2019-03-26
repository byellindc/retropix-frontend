class Adapter {
  static getUser(id) {
    return fetch(`${Adapter.api}/users/${id}`).then(res => res.json());
  }

  static getDoc(userId, id) {
    return fetch(`${Adapter.api}/users/${userId}/documents/${id}`)
      .then(res => res.json());
  }

  static getDocVersions(userId, id) {
    return fetch(`${Adapter.api}/users/${userId}/documents/${id}/versions`)
      .then(res => res.json());
  }

  static saveVersion(userId, docId, versionData) {
    return fetch(`${Adapter.api}/users/${userId}/documents/${docId}/versions`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: versionData })
    }).then(res => res.json());
  }

  static revertToVersion(userId, docId, versionId) {
    return fetch(`${Adapter.api}/users/${userId}/documents/${docId}/versions`, 
      {method: "PATCH"}
    ).then(res => res.json());
  }
}

Adapter.api = "http://localhost:3000";
export default Adapter;
