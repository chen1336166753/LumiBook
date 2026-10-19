package app.affine.pro.ai.chat.ui

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.size
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarScrollBehavior
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import app.affine.pro.R
import app.affine.pro.components.LumiBookAppBar
import app.affine.pro.components.LumiBookDropMenu
import app.affine.pro.components.LumiBookIcon

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ChatAppBar(
    modifier: Modifier = Modifier,
    scrollBehavior: TopAppBarScrollBehavior,
    onBackClick: () -> Unit = { },
    onClearHistory: () -> Unit = { },
    onSaveAsChatBlock: () -> Unit = { },
) {
    LumiBookAppBar(
        modifier = modifier,
        scrollBehavior = scrollBehavior,
        onNavIconPressed = onBackClick,
        title = {
            Row(
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text("Chat with AI", fontSize = 17.sp, fontWeight = FontWeight.Bold)
            }
        },
        actions = {
            LumiBookDropMenu(
                R.drawable.ic_more_horizontal,
                modifier = Modifier.size(44.dp),
                menuItems = {
                    DropdownMenuItem(
                        text = { Text("Clear history") },
                        trailingIcon = {
                            LumiBookIcon(R.drawable.ic_broom)
                        },
                        onClick = onClearHistory,
                    )
                    DropdownMenuItem(
                        text = { Text("Save as chat block") },
                        trailingIcon = {
                            LumiBookIcon(R.drawable.ic_bubble)
                        },
                        onClick = onSaveAsChatBlock,
                    )
                }
            )
        }
    )
}