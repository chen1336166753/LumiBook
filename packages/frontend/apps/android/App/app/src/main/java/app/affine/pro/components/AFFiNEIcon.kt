package app.affine.pro.components

import androidx.annotation.DrawableRes
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.size
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.IconButtonColors
import androidx.compose.material3.IconButtonDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import app.affine.pro.theme.LumiBookTheme

@Composable
fun LumiBookIcon(
    @DrawableRes resId: Int,
    modifier: Modifier = Modifier,
    tint: Color = LumiBookTheme.colors.iconPrimary,
    contentDescription: String? = null,
) {
    Icon(
        painter = painterResource(resId),
        tint = tint,
        contentDescription = contentDescription,
        modifier = modifier.size(24.dp)
    )
}

@Composable
fun LumiBookIconButton(
    @DrawableRes resId: Int,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true,
    colors: IconButtonColors = IconButtonDefaults.iconButtonColors().copy(
        contentColor = LumiBookTheme.colors.iconPrimary,
        disabledContentColor = LumiBookTheme.colors.iconDisable,
    ),
    interactionSource: MutableInteractionSource? = null,
) {
    IconButton(onClick, modifier.size(24.dp), enabled, colors, interactionSource) {
        LumiBookIcon(resId)
    }
}