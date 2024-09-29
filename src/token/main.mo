import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

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
        if(balances.get(msg.caller) == null) {
            let tokensAmount = 10000;
            balances.put(msg.caller, tokensAmount);
            return "Success";
        } else {
            return "Already Claimed";
        }
    };

    public shared(msg) func transfer(to : Principal, amount: Nat) : async Text {
        let callerBalance = await balanceOf(msg.caller);
        let toBalance = await balanceOf(to);
        if(callerBalance >= amount) {
            balances.put(msg.caller, callerBalance - amount);
            balances.put(to, toBalance + amount);
            return "Success";
        }
        else {
            return "Insufficient Funds";
        }
    }
}