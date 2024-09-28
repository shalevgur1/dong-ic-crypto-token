import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

actor Token {

    var owner : Principal = Principal.fromText("sh3ap-bxrea-nzap4-yhwgp-iwo27-7h4cq-xsbji-n5ybh-i67h7-j5w4u-3ae");
    var totalSupply : Nat = 1000000000;
    var symbol : Text = "BONG";

    var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    balances.put(owner, totalSupply);

    public query func balanceOf (balanceName : Principal) : async Nat {
        let balance : Nat = switch (balances.get(balanceName)) {
            case null 0;
            case (?res) res;
        };
        return balance;
    };

    public query func getSymbol () : async Text {
        return symbol;
    };

    public shared(msg) func payOut() : async Text {
        Debug.print(debug_show(msg.caller));
        return "Success";
    };
}