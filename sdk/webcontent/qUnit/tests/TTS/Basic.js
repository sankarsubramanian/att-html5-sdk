function basicTextToSpeechTests() {
    //Function that wraps all of the tests. Slows the tests for throttling purposes.
    function slowTest(name, code) {
        test(name, function() {
            slowFn(function() {
                start();
                code();
            });
            stop();
        })
    }

    //Function inside the slowTest function that allows manipulation of the throttling time.
    function slowFn(code) {
        setTimeout(code, 200);
    }

    //Tests utilizing speech API
    slowTest("English Basic Test - Hello Michael!", function() {
        var phrase ='Hello Michael!';
        AttApiClient.Speech.textToSpeech(
             {text: phrase},
             function(response) {
                start();
                ok(true, "Worked On Utilizing Speech with WAV." +
                    "\nresponse: ")
                validateAudioResponse(response, phrase);
            },
            function(response) {
                start();
                ok(false, "Fail On Utilizing Speech with WAV." +
                    "\nresponse: " );   
            }
        );
        stop();
    });
    
    slowTest("English Basic Test - Paragraph of Text", function() {
        var phrase ='Hello! Welcome to the AT&T Text To Speech (TTS) Test. This test will check to see if the SDK is able to handle large amounts of text. All of what you are hearing has been converted from text, sent to the server via the API and converted into speech. We are now going to end this test. Thank you for listening. Good-Bye!';
        AttApiClient.Speech.textToSpeech({text: phrase},
             function(response) {
                start();
                ok(true, "Worked On Utilizing Speech with WAV." +
                    "\nresponse: ")
                    validateAudioResponse(response,phrase);
            },
            function(response) {
                start();
                ok(false, "Fail On Utilizing Speech with WAV." +
                    "\nresponse: " );   
            }
        );
        stop();
    });
    
    slowTest("Spanish Basic Test - Hola Miguel", function() {
        var phrase = 'Hola Miguel!';
        AttApiClient.Speech.textToSpeech({
            text: phrase,
            language: 'es-US'
            },
            function(response) {
                start();
                ok(true, "Worked On Utilizing Speech with WAV." +
                    "\nresponse: ")
                    validateAudioResponse(response, phrase, 'es-US');
            },
            function(response) {
                start();
                ok(false, "Fail On Utilizing Speech with WAV." +
                    "\nresponse: " );   
            }
        );
        stop();
    });
    
    slowTest("Spanish Basic Test - Paragraph of Text", function() {
        var phrase = 'Hola! Bienvenidos al texto de AT & T a voz (TTS) de prueba. Esta prueba será comprobar si el SDK es capaz de manejar grandes cantidades de texto. Todo lo que está escuchando se ha convertido a partir de texto, se envía al servidor a través de la API y se convierte en discurso. Ahora vamos a terminar esta prueba. Gracias por escuchar. Good-Bye!';
        AttApiClient.Speech.textToSpeech({
            text: phrase,
            language: 'es-US'
            },
            function(response) {
                start();
                ok(true, "Worked On Utilizing Speech with WAV." +
                    "\nresponse: ")
                    validateAudioResponse(response, phrase, 'es-US');
            },
            function(response) {
                start();
                ok(false, "Fail On Utilizing Speech with WAV." +
                    "\nresponse: " + JSON.stringify(response)); 
            }
        );
        stop();
    });

    slowTest("X-Args - valid", function() {
        var phrase = 'Hello Michael!';
        AttApiClient.Speech.textToSpeech({
            text: phrase,
            xargs: "ClientApp=TestApp1,ClientVersion=1.0.1,ClientScreen=widget,ClientSDK=SenchaSDK,DeviceType=SGHT999,DeviceOs=Android-1.0",
            },
            function(response) {
                start();
                ok(true, "\nresponse: ");
                validateAudioResponse(response, phrase);
            },
            function(response) {
                start();
                ok(false, "\nresponse: " + JSON.stringify(response)); 
            }
        );
        stop();
    });

    slowTest("Accept - valid - audio/x-wav", function() {
        var phrase = 'Hello Michael!';
        AttApiClient.Speech.textToSpeech({
            text: phrase,
            accept: "audio/x-wav"
            },
            function(response) {
                start();
                ok(response.type == "audio/x-wav", "check if response has expected Content-Type");
                ok(true, "\nresponse: ");
                validateAudioResponse(response, phrase);
            },
            function(response) {
                start();
                ok(false, "\nresponse: " + JSON.stringify(response)); 
            }
        );
        stop();
    });
}
