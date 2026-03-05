import Array "mo:core/Array";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type IssueType = {
    #emergency;
    #inspection;
    #quote;
  };

  module IssueType {
    public func compare(type1 : IssueType, type2 : IssueType) : Order.Order {
      switch (type1, type2) {
        case (#emergency, #emergency) { #equal };
        case (#emergency, _) { #less };
        case (#inspection, #emergency) { #greater };
        case (#inspection, #inspection) { #equal };
        case (#inspection, #quote) { #less };
        case (#quote, #quote) { #equal };
        case (#quote, _) { #greater };
      };
    };
  };

  type FormEntry = {
    name : Text;
    phone : Text;
    address : Text;
    issueType : IssueType;
  };

  module FormEntry {
    public func compareByIssueType(entry1 : FormEntry, entry2 : FormEntry) : Order.Order {
      IssueType.compare(entry1.issueType, entry2.issueType);
    };
  };

  let entries = List.empty<FormEntry>();

  public shared ({ caller }) func submitContactForm(
    name : Text,
    phone : Text,
    address : Text,
    issueType : IssueType,
  ) : async () {
    switch (Runtime.inputCheck(name)) {
      case (#error(_)) { return };
      case (_) {};
    };
    let entry : FormEntry = {
      name;
      phone;
      address;
      issueType;
    };
    entries.add(entry);
  };

  public query ({ caller }) func getAllSubmissions() : async [FormEntry] {
    entries.toArray();
  };

  public query ({ caller }) func getSortedByIssueType() : async [FormEntry] {
    entries.toArray().sort(FormEntry.compareByIssueType);
  };

  module Runtime {
    public func inputCheck(text : Text) : { #ok : Text; #error : Text } {
      if (text.size() == 0) { return #error("cannot be empty") };
      #ok("OK");
    };
  };
};
