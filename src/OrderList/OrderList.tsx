import { FC } from "react";
import { OrderListProps } from "./OrderList.types";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { orderListStyles } from "./OrderList.styles";

export const OrderList: FC<OrderListProps> = ({ list }) => (
  <Box
    component="div"
    sx={orderListStyles.listWrapper}
  >
    <Typography
      variant="h2"
      sx={orderListStyles.text}
    >
      your order
    </Typography>
    <List>
      {list?.map((item, index) => (
        <ListItem key={item}>
          <ListItemText
            sx={[
              orderListStyles.text,
              orderListStyles.listItem
            ]}
            primary={`${index + 1}. ${item}`}
          />
        </ListItem>
      ))}
    </List>
  </Box>
)