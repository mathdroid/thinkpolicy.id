// You'll find that downshift is a primitive component and
// you'll be most successful wrapping it with another component
// like the MultiSelect one you see here:
//
import React from "react";
import Downshift from "downshift";
import { Menu, ControllerButton, Item, ArrowIcon, getItems } from "./shared";

export class MultiSelect extends React.Component {
  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          isOpen: true,
          inputValue: ""
        };
      default:
        return changes;
    }
  };

  handleSelection = (selectedItem, downshift) => {
    const { selectedItems } = this.props;
    const callOnChange = () => {
      const { onSelect, onChange, selectedItems } = this.props;
      if (onSelect) {
        onSelect(selectedItems, this.getStateAndHelpers(downshift));
      }
      if (onChange) {
        onChange(selectedItems, this.getStateAndHelpers(downshift));
      }
    };
    if (selectedItems.includes(selectedItem)) {
      this.removeItem(selectedItem, callOnChange);
    } else {
      this.addSelectedItem(selectedItem, callOnChange);
    }
  };

  removeItem = (item, cb) => {
    const { selectedItems, setSelectedItems } = this.props;
    setSelectedItems(selectedItems.filter(i => i !== item));
    cb();
  };
  addSelectedItem(item, cb) {
    const { selectedItems, setSelectedItems } = this.props;
    setSelectedItems([...selectedItems, item]);
    cb();
  }

  getRemoveButtonProps = ({ onClick, item, ...props } = {}) => {
    return {
      onClick: e => {
        // TODO: use something like downshift's composeEventHandlers utility instead
        onClick && onClick(e);
        e.stopPropagation();
        this.removeItem(item);
      },
      ...props
    };
  };

  getStateAndHelpers(downshift) {
    const { selectedItems } = this.props;
    const { getRemoveButtonProps, removeItem } = this;
    return {
      getRemoveButtonProps,
      removeItem,
      selectedItems,
      ...downshift
    };
  }
  render() {
    const { render, children = render, ...props } = this.props;
    // TODO: compose together props (rather than overwriting them) like downshift does
    return (
      <Downshift
        {...props}
        stateReducer={this.stateReducer}
        onChange={this.handleSelection}
        selectedItem={null}
      >
        {downshift => children(this.getStateAndHelpers(downshift))}
      </Downshift>
    );
  }
}

class App extends React.Component {
  input = React.createRef();
  itemToString = item => (item ? item.name : "");
  handleChange = selectedItems => {
    console.log({ selectedItems });
  };

  render() {
    const { selectedItems, setSelectedItems } = this.props;
    return (
      <div
        css={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <h3>Interest</h3>
        <MultiSelect
          onChange={this.handleChange}
          itemToString={this.itemToString}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        >
          {({
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getRemoveButtonProps,
            removeItem,
            isOpen,
            inputValue,
            selectedItems,
            getItemProps,
            highlightedIndex,
            toggleMenu
          }) => (
            <div
              className={"multiselect"}
              style={{ width: "calc(100% - 2rem)", position: "relative" }}
            >
              <div
                css={{
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "none",
                  borderTopRadius: 0,
                  borderBottomRightRadius: isOpen ? 0 : 0,
                  borderBottomLeftRadius: isOpen ? 0 : 0,
                  boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)",
                  borderColor: "black",
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderLeftWidth: 1,
                  borderStyle: "solid",
                  padding: "0.5rem 1rem"
                }}
                onClick={() => {
                  toggleMenu();
                  !isOpen && this.input.current.focus();
                }}
              >
                <div
                  css={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center"
                  }}
                >
                  {selectedItems.length > 0
                    ? selectedItems.map(item => (
                        <div
                          key={item.id}
                          css={{
                            margin: "0.5rem",
                            marginLeft: 0,
                            paddingLeft: 8,
                            paddingRight: 8,
                            display: "inline-block",
                            wordWrap: "none",
                            backgroundColor: "#ccc",
                            borderRadius: 2
                          }}
                        >
                          <div
                            css={{
                              display: "grid",
                              gridGap: 6,
                              gridAutoFlow: "column",
                              alignItems: "center"
                            }}
                          >
                            <span>{item.name}</span>
                            <button
                              {...getRemoveButtonProps({ item })}
                              css={{
                                cursor: "pointer",
                                lineHeight: 0.8,
                                border: "none",
                                backgroundColor: "transparent",
                                padding: "0",
                                fontSize: "16px"
                              }}
                            >
                              𝘅
                            </button>
                          </div>
                        </div>
                      ))
                    : "Select interests"}
                  <input
                    css={{
                      border: "none",
                      margin: 0,
                      marginLeft: 6,
                      padding: 0,
                      flex: 1,
                      fontSize: 14
                    }}
                    {...getInputProps({
                      ref: this.input,
                      onKeyDown(event) {
                        if (event.key === "Backspace" && !inputValue) {
                          removeItem(selectedItems[selectedItems.length - 1]);
                        }
                      }
                    })}
                  />
                </div>
                <ControllerButton
                  {...getToggleButtonProps({
                    // prevents the menu from immediately toggling
                    // closed (due to our custom click handler above).
                    onClick(event) {
                      event.stopPropagation();
                    }
                  })}
                >
                  <ArrowIcon isOpen={isOpen} />
                </ControllerButton>
              </div>
              <Menu {...getMenuProps({ isOpen })}>
                {isOpen
                  ? getItems(inputValue).map((item, index) => (
                      <Item
                        key={item.id}
                        {...getItemProps({
                          item,
                          index,
                          isActive: highlightedIndex === index,
                          isSelected: selectedItems.includes(item)
                        })}
                      >
                        {item.name}
                      </Item>
                    ))
                  : null}
              </Menu>
            </div>
          )}
        </MultiSelect>
      </div>
    );
  }
}

export default App;
