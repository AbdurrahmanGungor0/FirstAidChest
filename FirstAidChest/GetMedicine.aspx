<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="GetMedicine.aspx.cs" Inherits="FirstAidChest.GetMedicine" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:TextBox ID="tbxBarcode" runat="server"></asp:TextBox>
            <asp:Button ID="btnGetMedicine" runat="server" Text=" Get Medicine by Barcode" OnClick="btnGetMedicine_Click" />
        </div>
    </form>
</body>
</html>
