function OnPageLoad() 
{
    document.all["HostIp1"].value = OSpiceX1.HostIP;
    document.all["HostPort1"].value = OSpiceX1.Port;
    document.all["Password1"].value = OSpiceX1.Password;
    document.all["CipherSuite1"].value = OSpiceX1.CipherSuite;
	document.all["NumberOfMonitors1"].value = OSpiceX1.NumberOfMonitors;

    document.all["HostIp2"].value = OSpiceX2.HostIP;
    document.all["HostPort2"].value = OSpiceX2.Port;
    document.all["Password2"].value = OSpiceX2.Password;
    document.all["CipherSuite2"].value = OSpiceX1.CipherSuite;
	
	document.all["AudioGuestIp1"].value = OSpiceX1.AudioGuestIP;
    document.all["AudioGuestPort1"].value = OSpiceX1.AudioGuestPort;
}

function SP1_Title()
{
	OSpiceX1.Title = "Test Title";
}

function SetAudioGuestIp1()
{
    OSpiceX1.AudioGuestIP = document.all["AudioGuestIp1"].value; //set property    
}

function SetAudioGuestPort1()
{
    OSpiceX1.AudioGuestPort = document.all["AudioGuestPort1"].value; //set property    
}

function SP1_AudioConnect()
{
    try
    {
    OSpiceX1.ConnectAudio();
    }
    catch(e)
    {
    alert(translate_errnum(e.number));
    }
}

function SP1_AudioDisconnect()
{
    try
    {
    OSpiceX1.DisconnectAudio();
    }
    catch(e)
    {
    alert(translate_errnum(e.number));
    }
}

function CreateMenu()
{
	//OSpiceX1.CreateMenu( document.all["MenuRes"].value);
	OSpiceX1.DynamicMenu = document.all["MenuRes"].value;
}

function DeleteMenu()
{
	OSpiceX1.DeleteMenu();
}

function SetTitle1()
{    
    OSpiceX1.Title = document.all["Title1"].value; //set property    
}

function GetTitle1()
{    
    alert(OSpiceX1.Title);
}

function SetHostIp1()
{
    OSpiceX1.HostIP = document.all["HostIp1"].value; //set property    
}

function SetHostPort1()
{
    OSpiceX1.Port = document.all["HostPort1"].value; //set property    
}

function SetSecurePort1()
{
    OSpiceX1.SecurePort = document.all["SecurePort1"].value; //set property    
}

function SetPassword1()
{
    OSpiceX1.Password = document.all["Password1"].value; //set property    
}

function SetCipherSuite1()
{
    OSpiceX1.CipherSuite = document.all["CipherSuite1"].value; //set property
}

function SetEncryptedChannels1()
{
    OSpiceX1.SSLChannels = document.all["EncryptedChannels1"].value; //set property
}

function SetNumberOfMonitors1()
{
    OSpiceX1.NumberOfMonitors = document.all["NumberOfMonitors1"].value; //set property
}

function SetColorDepth1()
{
    OSpiceX1.ColorDepth = document.all["ColorDepth1"].value; //set property
}

function SetDisableEffects1()
{
    OSpiceX1.DisableEffects = document.all["DisableEffects1"].value; //set property
}

function SP1_Connect()
{
    try
    {    
    OSpiceX1.FullScreen = document.all["Checkbox1"].checked;

    if (document.getElementById('NoUsb').checked) {
        OSpiceX1.UsbListenPort = document.getElementById('UsbListenPort').value;
    } else {
        OSpiceX1.UsbListenPort = 0;
    }

    OSpiceX1.Connect();
    }
    catch(e)
    {
    	alert("OSpiceX1:"+OSpiceX1);
    alert(translate_errnum(e.number));
    }
}

function SP1_Disconnect()
{
    try
    {
    OSpiceX1.Disconnect();
    }
    catch(e)
    {
    //alert(translate_errnum(e.number));
    }
}

function SP1_CopyLibcelt()
{
    try
    {
    	
    OSpiceX1.CopyLibcelt();
    }
    catch(e)
    {
    alert(translate_errnum(e.number));
    }
}

function SP1_Show()
{
    try
    {
    OSpiceX1.Show();
    }
    catch(e)
    {
    alert(translate_errnum(e.number));
    }

    // OSpiceX1.Port = 5; // set property
    // alert(OSpiceX1.Port); //get property
}

function SP1_Hide()
{
    try
    {
    OSpiceX1.Hide();
    }
    catch(e)
    {
    alert(translate_errnum(e.number));
    }
}

function SetTitle2()
{
    OSpiceX2.Title = document.all["Title2"].value; //set property    
}

function SetHostIp2()
{
    OSpiceX2.HostIP = document.all["HostIp2"].value; //set property    
}

function SetHostPort2()
{
    OSpiceX2.Port = document.all["HostPort2"].value; //set property    
}

function SetPassword2()
{
    OSpiceX2.Password = document.all["Password2"].value; //set property    
}

function SetCipherSuite2()
{
    OSpiceX1.CipherSuite = documet.all["CipherSuite2"].value; //set property
}

function SP2_Connect()
{
try
	{
		alert("begin to connect by spice...");
	OSpiceX2.Connect();
	}
catch(e)
	{
	alert(translate_errnum(e.number));
	}
}

function SP2_Disconnect()
{
try
	{
	OSpiceX2.Disconnect();
	}
catch(e)
	{
	alert(translate_errnum(e.number));
	}
}

function SP2_Show()
{
    try
    {
    OSpiceX2.Show();
    }
    catch(e)
    {
    alert(translate_errnum(e.number));
    }
}

function SP2_Hide()
{
    try
    {
    OSpiceX2.Hide();
    }
    catch(e)
    {
    alert(translate_errnum(e.number));
    }
}

function OnDisconnected(ErrCode) 
{
		alert("OnDisconnected =" + ErrCode);
}

function OnMenuItemSelected(ItemID) 
{
		alert("OnMenuItemSelected =" + ItemID);
}

function translate_errnum(num)
{
	var errnum = (num & 268435455); // get rid of severity
	var msg = "" + errnum.toString(16).toUpperCase();
	while (msg.length < 6)
	{
		msg = "0" + msg;
	}
		return "0x80" + msg;
}

function Text2_onclick() {

}
function ConnectForWebClient()
{
    try
    {
        OSpiceX1.HostIP = document.all["HostIp1"].value; //set property    
        OSpiceX1.Port = document.all["HostPort1"].value; //set property    
        OSpiceX1.FullScreen = "0";
        OSpiceX1.UsbListenPort = 32032;
        OSpiceX1.Connect();
    }catch(e)
    {
    	//alert("OSpiceX1:"+OSpiceX1);
        //alert(translate_errnum(e.number));
        $.messager.alert(
            'Error',
            "Spice连接失败",
            'error'
        );
    }
}
