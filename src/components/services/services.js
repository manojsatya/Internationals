export function postMember(data) {
  return fetch("/members", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}

export function getMembers() {
  return fetch("/members", {
    method: "GET",
    body: undefined,
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
}
