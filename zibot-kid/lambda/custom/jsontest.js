
	const data={
	request: {
		intent: {
			name: "TranslateIntent",
			confirmationStatus: "NONE",
			slots: {
				MandarinWord: {
					value: "no",
					resolutions: {
					},
				}
			}
		}
	}
}
/////////////////////////////////
console.log(data.request.intent.slots.MandarinWord.value);
